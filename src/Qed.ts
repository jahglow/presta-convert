export const Qed = async ({ items, callback, concurrency = 1, timeout=0 }) => {
  try {
    const L = items.length,
      isChunked = concurrency !== 1 && L > concurrency;
    let chunkedArray = items;
    if (L === 0) return items;
    
    if (isChunked) {
      chunkedArray = new Array(Math.ceil(L / concurrency))
        .fill()
        .map((_, i) =>
          items.slice(i * concurrency, i * concurrency + concurrency)
        );
      console.log('-', L,'items, chunks:',chunkedArray.length,'concurrency:',concurrency);
    }
    const result = [];
    await chunkedArray.reduce(
      (promises, chunk, i) =>
        promises.then(async () => {
          console.log('-','chunk', i+1)
          let part;
          if (isChunked) {
            part = await Promise.all(chunk.map(callback));
          } else {
            part = await callback(chunk);
          }
          result.push(part);
        }).then(()=>new Promise(resolve => {
          if(!(isChunked && timeout>0)) resolve();
          let t;
          t = setTimeout(() => {
            resolve(clearTimeout(t));
            t = null;
          }, timeout*1000);
        })),
      Promise.resolve()
    );

    return !isChunked
      ? result
      : result.reduce((acc, chunk) => acc.concat(chunk), []);
  } catch (error) {
    console.error(error);
  }
};
export default Qed;
