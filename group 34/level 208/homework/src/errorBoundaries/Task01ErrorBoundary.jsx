import React from "react";

export default class Task01ErrorBoundary extends React.Component{
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
    render(){
        if(this.state.hasError){
            return (
                <div>
                    <p className="text-[20px] font-[500] text-red-500">Something Went Wrong...</p>
                </div>
            )
        }
        return this.props.children;
    };
};