/************************************************************************
 *    Copyright (C) 2024 Code Forge Temple                              *
 *    This file is part of circuit-sketcher-app project                 *
 *    Licensed under the GNU General Public License v3.0.               *
 *    See the LICENSE file in the project root for more information.    *
 ************************************************************************/

import React, {useEffect, useRef} from "react";
import {LocalStorageManager, ModalAddImage} from "circuit-sketcher-core";

import {CanvasManager} from "circuit-sketcher-core";
import './DrawBoard.scss';
import {saveAs} from "file-saver";
import {loadJsonFile} from "../utils";
import saveIcon from '../../assets/floppy-disk.svg';
import loadIcon from '../../assets/download-circle.svg';

const CANVAS_ID = "circuit-board";

export const DrawBoard: React.FC = () => {
    const canvasRef = useRef<HTMLDivElement>(null);
    const resizeTimeoutRef = useRef<number | null>(null);
    const canvasFileInputRef = useRef<HTMLInputElement>(null);
    const libraryFileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        CanvasManager.setCanvasId(CANVAS_ID).getInstance().parse("[]");
    }, []);

    const handleSaveCanvas = async () => {
        const jsonStr = await CanvasManager.getInstance().stringify();
        const blob = new Blob([JSON.stringify(JSON.parse(jsonStr), null, 4)], {type: "application/json"});

        saveAs(blob, "Circuit Sketcher Canvas.circuit-sketcher");
    };

    const handleSaveLibrary = async () => {
        const timestamp = new Date().getTime();
        const filename = `Circuit Sketcher Library-${timestamp}.circuit-sketcher.lib`;
        const blob = new Blob([await LocalStorageManager.getLibrary(true)], {type: "application/json"});

        saveAs(blob, filename);
    };

    const handleLoadCanvasClick = () => {
        if (canvasFileInputRef.current) {
            canvasFileInputRef.current.click();
        }
    };

    const handleLoadLibraryClick = () => {
        if (libraryFileInputRef.current) {
            libraryFileInputRef.current.click();
        }
    };

    const handleCanvasFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const jsonStr = await loadJsonFile(event);

        CanvasManager.getInstance().parse(jsonStr);
    };

    const handleLibraryFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        await LocalStorageManager.setLibrary(await loadJsonFile(event));
    };

    const handleResize = () => {
        if (resizeTimeoutRef.current) {
            clearTimeout(resizeTimeoutRef.current);
        }

        resizeTimeoutRef.current = window.setTimeout(async () => {
            if (canvasRef.current) {
                const jsonStr = await CanvasManager.getInstance().stringify();

                CanvasManager.getInstance().parse(jsonStr);
            }
        }, 300);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);

            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div className="canvas-container">
            <ModalAddImage />
            <div className="draw-board-menu">
                <div className="btn-group canvas-action-bar" role="group" aria-label="Canvas">
                    <button type="button" className="btn btn-secondary disabled" disabled>Canvas</button>
                    <button type="button" className="btn btn-primary icon-btn" onClick={handleLoadCanvasClick}><img src={loadIcon} alt="Load..." /></button>
                    <input
                        type="file"
                        ref={canvasFileInputRef}
                        accept=".circuit-sketcher"
                        onChange={handleCanvasFileChange}
                    />
                    <button type="button" className="btn btn-primary icon-btn" onClick={handleSaveCanvas}><img src={saveIcon} alt="Save" /></button>
                </div>
                <div className="btn-group library-action-bar" role="group" aria-label="Library">
                    <button type="button" className="btn btn-secondary disabled" disabled>Library</button>
                    <button type="button" className="btn btn-primary icon-btn" onClick={handleLoadLibraryClick}><img src={loadIcon} alt="Load..." /></button>
                    <input
                        type="file"
                        ref={libraryFileInputRef}
                        accept=".circuit-sketcher.lib,.lib"
                        onChange={handleLibraryFileChange}
                    />
                    <button type="button" className="btn btn-primary icon-btn" onClick={handleSaveLibrary} ><img src={saveIcon} alt="Save" /></button>
                </div>
            </div>
            <div className="canvas" id={CANVAS_ID} ref={canvasRef}></div>
        </div>
    );
};