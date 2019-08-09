const openssl = require('openssl-nodejs');
const { exec } = require('child_process');

function generateCSR(options, cb) {
    exec(`openssl req -nodes -newkey rsa:${options.keyLength} -keyout ${process.env.OPENSSL_DIR}/${options.subject.cn}.key -out ${process.env.OPENSSL_DIR}/${options.subject.cn}.csr -subj "/C=${options.subject.C}/ST=${options.subject.ST}/L=${options.subject.L}/O=${options.subject.O}/OU=${options.subject.OU}/CN=${options.subject.CN}"`, (err, stdout, stderr) => {
        if (err) {console.log(err); cb(err, null)}
        else {
            cb(null, true)
        }
    })
}

module.exports = generateCSR;