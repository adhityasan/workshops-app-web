const createCancellableSignal = asyncFunc => {
  const ret = {};
  ret.signal = new Promise((resolve, reject) => {
    ret.cancel = message => {
      reject(new Error(`Promise was cancelled: ${message}`));
    };
    resolve(asyncFunc());
  });

  return ret;
};

export default createCancellableSignal;
