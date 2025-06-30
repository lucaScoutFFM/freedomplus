### `generateJWT`

The `generateJWT` function is used to generate a JSON Web Token (JWT) for authentication purposes. It is located in [`packages/tokenGenerator/src/tokenGenerator.ts`](./packages/tokenGenerator/src/tokenGenerator.ts).

#### Parameters

- **`credentials`** (`object`): An object containing the following properties:
  - **`issuerId`** (`string`): The unique identifier for the issuer. This value is provided by the portal.
  - **`keyId`** (`string`): The unique identifier for the key. This value is also provided by the portal.
  - **`privateKey`** (`string`): The private key used to sign the JWT. This key is obtained from the portal.

#### Returns

- **`Promise<string>`**: A promise that resolves to the signed JWT as a string.

#### Example Usage

```typescript
import { generateJWT } from './packages/tokenGenerator/src/tokenGenerator';

const credentials = {
  issuerId: 'your-issuer-id', // Replace with your issuer ID from the portal
  keyId: 'your-key-id', // Replace with your key ID from the portal
  privateKey: 'your-private-key', // Replace with your private key from the portal
};

generateJWT(credentials).then((jwt) => {
  console.log(`Generated JWT: ${jwt}`);
});