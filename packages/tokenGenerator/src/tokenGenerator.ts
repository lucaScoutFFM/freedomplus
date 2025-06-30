import  * as jose from 'jose';

export async function generateJWT(credentials:{
    issuerId: string;
    keyId: string;
    privateKey: string
}): Promise<string> {
    const key = await jose.importPKCS8(credentials.privateKey, "RS256");
    const jwt = await new jose.SignJWT({
    iss: credentials.issuerId,
    kid: credentials.keyId,
    exp: new Date().getTime() + 2 * 60 * 1000 // 1 hour expiration
    })
    .setProtectedHeader({
    alg: "RS256",
    typ: "JWT",
    kid: credentials.keyId
    })
    .sign(key);
    return jwt;
}
