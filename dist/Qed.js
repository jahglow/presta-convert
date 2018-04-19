"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
exports.Qed = ({ items, callback, concurrency = 1, timeout = 0 }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    try {
        const L = items.length, isChunked = concurrency !== 1 && L > concurrency;
        let chunkedArray = items;
        if (L === 0)
            return items;
        if (isChunked) {
            chunkedArray = new Array(Math.ceil(L / concurrency))
                .fill()
                .map((_, i) => items.slice(i * concurrency, i * concurrency + concurrency));
            console.log('-', L, 'items, chunks:', chunkedArray.length, 'concurrency:', concurrency);
        }
        const result = [];
        yield chunkedArray.reduce((promises, chunk, i) => promises.then(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('-', 'chunk', i + 1);
            let part;
            if (isChunked) {
                part = yield Promise.all(chunk.map(callback));
            }
            else {
                part = yield callback(chunk);
            }
            result.push(part);
        })).then(() => new Promise(resolve => {
            if (!(isChunked && timeout > 0))
                resolve();
            let t;
            t = setTimeout(() => {
                resolve(clearTimeout(t));
                t = null;
            }, timeout * 1000);
        })), Promise.resolve());
        return !isChunked
            ? result
            : result.reduce((acc, chunk) => acc.concat(chunk), []);
    }
    catch (error) {
        console.error(error);
    }
});
exports.default = exports.Qed;
//# sourceMappingURL=Qed.js.map