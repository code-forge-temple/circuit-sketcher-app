/************************************************************************
 *    Copyright (C) 2024 Code Forge Temple                              *
 *    This file is part of circuit-sketcher-app project                 *
 *    Licensed under the GNU General Public License v3.0.               *
 *    See the LICENSE file in the project root for more information.    *
 ************************************************************************/

export const loadJsonFile = (event: React.ChangeEvent<HTMLInputElement>): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const file = event.target.files?.[0];

        if (!file) {
            reject(new Error("No file selected"));
            return;
        }

        const reader = new FileReader();

        reader.onload = (e) => {
            const jsonStr = e.target?.result as string;

            event.target.value = "";

            resolve(jsonStr);
        };

        reader.readAsText(file);
    });
}
