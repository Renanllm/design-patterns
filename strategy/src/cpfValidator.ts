const CPF_LENGTH = 11
const FACTOR_USED_TO_FIND_THE_FIRST_VERIFYING_DIGIT = 10
const FACTOR_USED_TO_FIND_THE_SECOND_VERIFYING_DIGIT = 11
const AMOUNT_OF_CPF_BASE_NUMBERS = 9

function removeSpecialChars(cpf: string) {
  return cpf.replace(/[^0-9]/g, '');
}

function isValidLength(cpf: string) {
  return cpf.length === CPF_LENGTH
}

function areAllDigitsTheSame(cpf: string) {
  const firstDigit = cpf[0]
  return cpf.split('').every(digit => digit === firstDigit)
}

function calculateVerifyingDigit(cpf: string, factor: number) {
  let total = 0
  for (const digit of cpf) {
    if(factor > 1) total += Number(digit) * factor
    factor--
  }
  const rest = total % 11
  return rest > 1 ? 11 - rest : 0
}

export function validate(cpf: string) {
  cpf = removeSpecialChars(cpf)
  if (!isValidLength(cpf)) return false
  if (areAllDigitsTheSame(cpf)) return false
  const dig1 = calculateVerifyingDigit(cpf, FACTOR_USED_TO_FIND_THE_FIRST_VERIFYING_DIGIT)
  const dig2 = calculateVerifyingDigit(cpf, FACTOR_USED_TO_FIND_THE_SECOND_VERIFYING_DIGIT)
  const actualVerifyingDigits = cpf.slice(AMOUNT_OF_CPF_BASE_NUMBERS)
  const rightVerifyingDigits = `${dig1}${dig2}`
  return actualVerifyingDigits === rightVerifyingDigits
}





	// if (str !== null) {
  //       if (str !== undefined) {
  //           if (str.length >= 11 || str.length <= 14){

  //               str=str
  //                   .replace('.','')
  //                   .replace('.','')
  //                   .replace('-','')
  //                   .replace(" ","");  
    
  //               if (!str.split("").every(c => c === str[0])) {
  //                   try{  
  //                       let     d1, d2;  
  //                       let     dg1, dg2, rest;  
  //                       let     digito;  
  //                           let     nDigResult;  
  //                       d1 = d2 = 0;  
  //                       dg1 = dg2 = rest = 0;  
                            
  //                       for (let nCount = 1; nCount < str.length -1; nCount++) {  
  //                           // if (isNaN(parseInt(str.substring(nCount -1, nCount)))) {
  //                           // 	return false;
  //                           // } else {
    
  //                               digito = parseInt(str.substring(nCount -1, nCount));  							
  //                               d1 = d1 + ( 11 - nCount ) * digito;  
                
  //                               d2 = d2 + ( 12 - nCount ) * digito;  
  //                           // }
  //                       };  
                            
  //                       rest = (d1 % 11);  
                
  //                       dg1 = (rest < 2) ? dg1 = 0 : 11 - rest;  
  //                       d2 += 2 * dg1;  
  //                       rest = (d2 % 11);  
  //                       if (rest < 2)  
  //                           dg2 = 0;  
  //                       else  
  //                           dg2 = 11 - rest;  
                
  //                           let nDigVerific = str.substring(str.length-2, str.length);  
  //                       nDigResult = "" + dg1 + "" + dg2;  
  //                       return nDigVerific == nDigResult;
  //                   }catch (e){  
  //                       console.error("Erro !"+e);  
    
  //                       return false;  
  //                   }  
  //               } else return false
    
  //           }else return false;
  //       }


	// } else return false;
