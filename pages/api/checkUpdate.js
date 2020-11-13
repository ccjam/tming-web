// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.statusCode = 200
    res.json({ fileUrl: 'https://github.com/ccjam/tming-web/releases/download/1.1.3/Tming.1.1.3.exe', version: '1.1.3', versionCode: 1 })
  }
  