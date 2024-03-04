import React, { useRef } from "react"
import drop from "../../assets/images/img-drop.svg"

const ImageUpload = ({ name, types, maxWidth, maxHeight }) => {
  const inputRef = useRef(null)

  const handleComponentClick = () => {
    // Trigger click on the hidden file input when the component is clicked
    inputRef.current.click()
  }

  return (
    <div>
      <label>{name}</label>
      <div
        className="input-block p-4 mt-4"
        onClick={handleComponentClick}
        style={{ cursor: "pointer", border: "2px dotted #ccc" }}
      >
        <div className="flex justify-center gap-5 p-2 text-sm">
          <img src={drop} alt="drop image" />
          <div>
            <h6 className="align-center">
              <span className="text-info">Click to Replace </span> or Drag and Drop
            </h6>
            <p className="text-xs">
              {types} (
              <span>
                {maxWidth} * {maxHeight} px
              </span>
              )
            </p>
          </div>
          <input type="file" multiple id="image_sign" ref={inputRef} style={{ display: "none" }} />
        </div>
      </div>
    </div>
  )
}

export default ImageUpload
