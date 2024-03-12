/* eslint-disable react/prop-types */
export function Modal(props){
  if (props.show){
    return(
      <div>
        <div>
          {props.children}
          <button type="button" onClick={props.onCloseRecipe}>
            &#x2715;
          </button>
        </div>
      </div>
    )
  }
}