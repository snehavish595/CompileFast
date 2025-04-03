export async function POST(req) {
    try{
        const{script, language, versionIndex} = await req.json();

        const response = await fetch("https://api.jdoodle.com/v1/execute", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                script,
                language,
                versionIndex,
                clientId: process.env.JDOODLE_CLIENT_ID,
                clientSecret: process.env.JDOODLE_CLIENT_SECRET,
            }),
        });
        if (!response.ok) throw new Error("Failed to execute code");
        const result = await response.json();
        return Response.json(result);
    } catch (err) {
        return Response.json({error: err.message}, {status: 500});
    }
}