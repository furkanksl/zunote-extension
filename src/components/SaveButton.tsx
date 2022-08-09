import React, { useState } from 'react';
import './SaveButton.scss'
type Props = {
  
};
export function SaveButton(props: Props)  {

    const [isSaving, setIsSaving] = useState(false);


    function onSave(e:any){
        e.preventDefault();

        if(!isSaving)
            e.currentTarget.classList.add('processing');
        else
            e.currentTarget.classList.remove('processing');

        setIsSaving(!isSaving);
      }

return (
    <div>
        <button className="button" onClick={onSave}>
            <span>SAVE</span>
            <svg viewBox="0 0 15 13">
                <polyline points="2 6.5 6 10.5 13 2.5"></polyline>
            </svg>
        </button>
    </div>
    );
};