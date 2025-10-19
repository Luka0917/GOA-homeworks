import React from "react";

export default class ErrorBoundary extends React.Component{
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
    handleReset = () => {
        this.setState({ hasError: false, error: null });
    };
    render(){
        if(this.state.hasError){
            return (
                <div className="flex justify-center items-center flex-col gap-[5px]">
                    <p className="text-[20px] font-[500] text-red-500">Something Went Wrong...</p>
                    <button onClick={this.handleReset} className="border border-black rounded-[5px] px-[20px] py-[2px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Reset</button>
                </div>
            )
        }
        return this.props.children;
    };
};