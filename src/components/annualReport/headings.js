const Headings=(props)=>{
    return (
        <h2 class="accordion-header" id={props.id}>
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={props.target} aria-expanded="false" aria-controls={props.aria}>
                  {props.data}
                </button>
        </h2>
    )
}
export default Headings;