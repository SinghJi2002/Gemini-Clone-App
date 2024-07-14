import { createContext, useState, useEffect } from "react";
import run from "../config/gemini";

export const Context=createContext()

const ContextProvider=(props)=>{

    function reformatText(input) {
        // Replace bold markers with HTML tags
        let formattedText = input.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        
        // Replace bullets with HTML list items
        formattedText = formattedText.replace(/(\n|^)\*\s(.*?)(\n|$)/g, '$1<li>$2</li>$3');
        
        // Wrap bullet sections in <ul> tags
        formattedText = formattedText.replace(/(<li>.*?<\/li>)/gs, '<ul>$1</ul>');
        
        // Clean up nested <ul> tags (if any)
        formattedText = formattedText.replace(/<\/ul>\s*<ul>/g, '');
        
        // Add paragraph tags around regular text
        formattedText = formattedText.replace(/([^\n]+)(\n|$)/g, '<p>$1</p>');
        
        // Clean up double <p> tags around list items
        formattedText = formattedText.replace(/<p><ul>/g, '<ul>');
        formattedText = formattedText.replace(/<\/ul><\/p>/g, '</ul>');
    
        // Remove empty <p> tags
        formattedText = formattedText.replace(/<p><\/p>/g, '');
    
        return formattedText;
    }
    

    const [input,setInput]=useState("")
    const [recentPrompt,setRecentPrompt]=useState("")
    const [previousPrompt,setPreviousPrompts]=useState([])
    const [showResult,setShowResult]=useState(false)
    const [loading,setLoading]=useState(false)
    const [resultData,setResultData]=useState("")

    const onSent=async()=>{
        setRecentPrompt("")
        setLoading(true)
        setRecentPrompt(input)
        setShowResult(true)
        setPreviousPrompts(prev=>[...prev,input])
        const response=await run(input)
        setResultData(reformatText(response))
        setLoading(false)
        setInput("")
    }

    const onLoad=async(prompt)=>{
        setRecentPrompt("")
        setLoading(true)
        setRecentPrompt(input)
        setShowResult(true)
        setPreviousPrompts(prev=>[...prev,input])
        const response=await run(prompt)
        setResultData(reformatText(response))
        setLoading(false)
        setInput("")
    }

    const contextValue={
        onLoad,
        onSent,
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        previousPrompt,
        setPreviousPrompts,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider 