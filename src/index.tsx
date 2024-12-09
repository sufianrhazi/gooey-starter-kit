import Gooey, { mount, VERSION } from '@srhazi/gooey';

const root = document.getElementById('main');
if (root) {
    mount(
        root,
        <>
            <h1>Gooey {VERSION} starter kit</h1>
            <p>Looks like everything is working!</p>
            <ul>
                <li>
                    Entry point: <code>./index.html</code>
                </li>
                <li>
                    JS/TS source: <code>./src/</code>
                </li>
                <li>
                    <code>npm run build</code> - vite builds to{' '}
                    <code>./dist/</code>
                </li>
                <li>
                    <a href="https://www.typescriptlang.org/">Typescript</a>{' '}
                    config: <code>./tsconfig.json</code>
                </li>
                <li>
                    <a href="https://prettier.io/">Prettier</a> config:{' '}
                    <code>./prettierrc</code>
                </li>
                <li>
                    <a href="https://eslint.org/">eslint</a> config:{' '}
                    <code>./eslintrc.cjs</code>
                </li>
            </ul>
        </>
    );
} else {
    alert('Error: no #main element found!');
}
