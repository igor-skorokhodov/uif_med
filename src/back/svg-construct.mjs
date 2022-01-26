import fs from 'fs';
import path from 'path';
import { argv } from 'process';

// достаем текущий каталог (чтобы не исп. __dirName, она deprecated в связи с отсутсвием при каких-то новых условиях импортов [$$## разобраться досконально])
let re = /^(.+[\\\/])[^\\]+$/;
let ms = argv[1].match(re);
let dirHere = ms[1]; // current dir

let dirRootFront = path.resolve(dirHere + '../front/') + '/';

let dirsToHandleLoc = [
    'component/containers/_Base/',
    'component/containers/Breathing/',
    'component/containers/Digestion/',
    'component/containers/Heart/',
    'component/containers/Muscles/',
    'component/containers/Nerves/',
    'component/containers/Skeleton/',
];

const srcDirLoc = 'svg_src/';
const destcDirLoc = 'svg/';

let reToRetrieveInner = /^\s*(?:<\?xml.*?>|)\s*<svg.*?>\s*(.*)\s*<\/svg>\s*$/msi;

dirsToHandleLoc.forEach(async dirLoc => {
    let dirSrc = dirRootFront + dirLoc + srcDirLoc;
    let files = await fs.promises.readdir(path.resolve(dirSrc));
    files.filter(name => /.svg$/.test(name)).forEach(async file => {
        let content = await fs.promises.readFile(dirSrc + '/' + file, { encoding: 'utf8' });
        let ms = content.match(reToRetrieveInner);

        if (ms) {
            let dir = dirRootFront + dirLoc + destcDirLoc;
            try {
                await fs.promises.mkdir(dir);
            } catch (e) {

            }

            let fileToWrite = dir + file;
            await fs.promises.writeFile(fileToWrite, '<g>\n' + ms[1] + '</g>');
        }
    })
});

// @@## catch