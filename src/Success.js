import Button from "./Button"

function Success({id, gotoLogin}){

    return (
        <div className="center">
            <div>{id}</div>
            <Button color="orange" name={"To Login"} click={gotoLogin}></Button>
        </div>
        )
}

export default Success