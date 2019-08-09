const router = require('express').Router();
const generateCSR = require('../utils/generate-csr');
const fs = require('fs');


// Handle creation of new CSR.
router.post('/csr', (req, res) => {
    /* 
    The following body params need to be sent in the post request:
        keyLength,
        subject: {C: "", ST: "", L: "", O: "", OU: "", cn: ""}
    */
    generateCSR(req.body, (err, buffer) => {
        if (err) { return res.json({message: "Error creating CSR."}) }
        if (buffer) {
            const csr = fs.readFileSync(process.env.OPENSSL_DIR + `/${req.body.subject.cn}.csr`,'utf8');
            const csr_key = fs.readFileSync(process.env.OPENSSL_DIR + `/${req.body.subject.cn}.key`,'utf8');
            res.status(200).json({message: "CSR created successfully.", certificate: {cn: req.body.subject.cn, csr: csr, key: csr_key}})
        }
    })
});

module.exports = router;