// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.statusCode = 200
    res.json({ fileUrl: 'https://github.com/ccjam/tming-web/releases/download/1.1.1/Tming.1.1.1.exe', version: '1.1.1', versionCode: 1 })
  }
  