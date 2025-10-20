import path from 'path';

const config = {
    webpack: {
        alias: {
            '@app': path.resolve(__dirname, 'src/app'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@validation': path.resolve(__dirname, 'src/validation'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@lib': path.resolve(__dirname, 'src/lib'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@interfaces': path.resolve(__dirname, 'src/types/interfaces'),
        },
    },
};

export default config;
