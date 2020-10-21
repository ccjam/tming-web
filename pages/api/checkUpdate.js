// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.statusCode = 200
    res.json({ fileUrl: 'https://github.com/ccjam/tming-web/releases/download/1.0.0/Tming.Setup.1.0.9.exe', version: '1.0.9', versionCode: 1 })
  }
  