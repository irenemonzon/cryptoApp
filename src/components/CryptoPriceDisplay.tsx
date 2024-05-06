import { useMemo } from "react"
import { useCryptoStore } from "../store"

const CryptoPriceDisplay = () => {
    const result =useCryptoStore((state)=>state.result)
    const hasResult=useMemo(()=> !Object.values(result).includes(''),[result])

  return (
    <div className="result-wrapper">
        {hasResult && (
            <>
             <h2>Cotizacion</h2>
                <div className="result">
                    <img
                    src={`https://cryptocompare.com/${result.IMAGEURL}`}
                    alt="imagen criptomoneda"
                    />
                    <div>
                        <p>El precio es de : <span>{result.PRICE}</span></p>
                        <p> Precio más alto del día : <span>{result.HIGHDAY}</span></p>
                        <p>Precio más bajo del día : <span>{result.LOWDAY}</span></p>
                        <p> Variación de las últimas 24 horas : <span>{result.CHANGEPCT24HOUR}</span></p>
                        <p>Ultima actualización : <span>{result.LASTUPDATE}</span></p>
                    </div>
                </div>
            </>
        )}
       
    </div>
  )
}

export default CryptoPriceDisplay