import '../assets/app.css'
function BoxItem(props: any) {
    return (<>
        <div>
            <h2 className='cnt'>
                count: {props.cnt}
            </h2>
            <button className='btn' onClick={props.onBtnClick} />
        </div>
    </>)
}

export default BoxItem