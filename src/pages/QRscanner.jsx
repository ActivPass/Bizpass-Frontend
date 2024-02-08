import { useRef } from "react"
import QrScanner from "react-qr-scanner"
//import { useTapEntry } from "../utils/hooks"

const QRScanner = () => {
  //const useTapEntryMutation = useTapEntry()
  const scannerRef = useRef(null)

  const handleScan = data => {
    if (data) {
      //useTapEntryMutation.mutate(data.text)
      resetScanner()
    }
  }

  const resetScanner = () => {
    if (scannerRef.current) {
      scannerRef.current.stop()
      scannerRef.current.start()
    }
  }

  return (
    <QrScanner
      onScan={handleScan}
      onError={err => console.error(err)}
      ref={scannerRef}
      className="border border-gray-300 rounded-md overflow-hidden"
    />
  )
}

export default QRScanner
