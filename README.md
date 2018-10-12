> ## 🛠 Status: In Development
> lit-glsl is currently in development. It isn't put to npmjs yet.
> All mentioned commands in the README according to installation aren't available yet.

# lit-glsl

`lit-glsl` provides a javascript literal function, that allows writing glsl code within your javascript/typescript file.

## Install

```
yarn install @rammbulanz/lit-glsl
```

## Usage

```typescript
import { glsl } from '@rammbulanz/lit-glsl'

/**
 * `vertexShader` will contain the shader as string.
 * There isn't any precompile action for now.
 */
const vertexShader = glsl`
	precision highp float;
	attribute vec3 position;
	uniform mat4 worldViewProjection;
	void main() {
		gl_Position = worldViewProjection * vec4(position, 1.0);
	}
`;

// Same logic for fragment shader

```

## Syntax Highlighting

- vscode: [vscode-glsl-literal](https://marketplace.visualstudio.com/items?itemName=boyswan.glsl-literal)
