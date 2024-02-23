import { useState } from "react"

const useGeneratePassword = () =>{
    const [genPassword, setGenPassword] = useState(null);
    const generatePassword = (length, passwordOptions) => {
        let charset = "";
        const selectedOptions = passwordOptions.filter(op=> op.state === true);
        selectedOptions.map(opt => {
            switch (opt.title){
                case ('Use Upper Case'):
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case ('Use Lower Case'):
                    charset += "abcdefghijklmnopqrstuvwxyz";
                    break;
                case ('Use Numbers'):
                    charset += "0123456789";
                    break;
                case ('Use Special Characters'):
                    charset += "!@#$%&*()_-+:;~{}[]";
                    break;

            }
        });
        let pwd = "";
        for(let i=1; i<= length; i++){
            let randomIndex = Math.floor(Math.random() * charset.length);
            pwd += charset[randomIndex]
        }
        setGenPassword(pwd);
    }
    return {genPassword, generatePassword};
}
export default useGeneratePassword;
