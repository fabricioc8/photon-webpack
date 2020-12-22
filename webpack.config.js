
module.exports = {
    entry: './src/bootstrap.ts',
    experiments: {
        outputModule: true,
        syncWebAssembly: true,
        topLevelAwait: true,
        
        },
}