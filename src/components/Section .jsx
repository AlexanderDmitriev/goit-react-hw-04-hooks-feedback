import React from "react";
import { Title} from "./App.styled";

export const Section = ({title, children}) => {
    return (<section>
        <Title>{title}</Title>
        {children}
    </section>)
    
}