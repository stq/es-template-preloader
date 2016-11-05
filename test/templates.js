module.exports = {
    'LazyModule': (bundleName, lazyFile) => {
        return {
            resolve: () => {
                require.ensure([], ()=> {
                    const deffered = $q.defer();

                    require(lazyFile);

                    return deffered.promise;
                }, bundleName)
            }
        }
    },
    'LazyTemplate': (bundleName, lazyTemplate) => {
        return {
            resolve: () => {
                require.ensure([], ()=> {
                    const deffered = $q.defer();

                    require(lazyTemplate);

                    return deffered.promise;
                }, bundleName)
            }
        }
    }
};