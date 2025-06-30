import  * as jose from 'jose';

export async function generateJWT(credentials:{
    issuerId: string;
    keyId: string;
    privateKey: string
}): Promise<string> {
    const key = await jose.importPKCS8(credentials.privateKey, "RS256");
    const iat = new Date().getTime() / 1000
    const exp = iat + 10 * 60
    console.log("iat:", iat);
    console.log("exp:", exp);
    const jwt = await new jose.SignJWT({
    iss: credentials.issuerId,
    kid: credentials.keyId,
    iat: iat,
    exp: exp
    })
    .setProtectedHeader({
    alg: "RS256",
    typ: "JWT",
    kid: credentials.keyId
    })
    .sign(key);
    return jwt;
}
