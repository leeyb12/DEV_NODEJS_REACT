import {useState} from 'react'
import Crypto from 'crypto-js'

const Cryp = () => {
    const [inid, setInid] = useState('')
    const [inpw, setInpw] = useState('')
    const [skey, setSkey] = useState('')

    const [encrypt, setEncrypt] = useState('')
    const [decrypt, setDecrypt] = useState('')

    const encryptFn = () => {
        const data = {id: inid, pw: inpw} // 원하는 형태로 객체화
        const encData = Crypto.AES.encrypt(  JSON.stringify(data), skey).toString() // skey와 함께 데이터를 암호화
        setEncrypt(encData)
    }

    const decryptFn = () => {
        try {
            const bytes = Crypto.AES.decrypt(encrypt, skey)
            const decrypted = JSON.parse(bytes.toString(Crypto.enc.Utf8))
            setDecrypt(decrypted)
        } catch (error) {
            console.log('복호화 오류', error)
            alert('복호화에 실패하였습니다. 암호키를 확인하세요.')
        } finally {
            alert('암호키 관리에 주의하세요.')
        }
    }
    /* 핸들러 */
    const handleIdChange = e => setInid(e.target.value)
    const handlePwChange = e => setInpw(e.target.value)
    const handleKeyInput = e => setSkey(e.target.value)

    
    return (
        <>
           <h1>2. 암호화, 복호화, 단방향</h1>
           <div>
              ID : <input type="text" onChange={handleIdChange} value={inid} />
           </div>
           <div>
              PW : <input type="password" onChange={handlePwChange} value={inpw} />
           </div>
           <div>
              Key : <input type="password" onChange={handleKeyInput} value={skey} />
           </div>
           <button onClick={encryptFn}>암호화 동작</button>
           <hr />
           <div>암호화 전: {(inid && inpw) && JSON.stringify({ id: inid, pw: inpw} )}</div><br />
           <div>{(!!encrypt) && `암호화 후: ${encrypt} / (글자수: ${encrypt.length})`}</div><hr />
           <div>
              복호화 암호키: 
               <input type="password" ocChange={handleKeyInput} value={skey} />
           </div>
           <button onClick={decryptFn}>복호화 동작</button>
           <div>{!!decrypt && JSON.stringify(decrypt)}</div>
           <div>{`복호화된 데이터: Id는 ${decrypt.id}이고, PASSWORD는 ${decrypt.pw} 입니다.`}</div>
        </>

    )
}

export default Cryp