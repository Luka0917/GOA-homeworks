import React from "react";

export default class Task03ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError: false, error: null};
    };
    static getDerivedStateFromError(error){
        return {hasError: true, error};
    };
    componentDidCatch(error, info){
        console.error(error, info);
    };
    reload(){
        window.location.reload();
    }
    render(){
        if(this.state.hasError){
            return (
                <div className="text-center">
                    <p className="text-[20px] font-[500] text-red-500">Error!</p>
                    <button onClick={this.reload} className="mt-[10px] border border-black rounded-[7px] px-[20px] py-[3px] bg-black text-white text-[20px] font-[500] cursor-pointer hover:bg-white hover:text-black transition duration-200">Reload</button>
                </div>
            )
        }
        return this.props.children;
    };
};