import React from "react"
import { DiscussionEmbed } from 'disqus-react';


const Comments = (props) => {

    return <div>
        <DiscussionEmbed
            shortname='uifocus'
            config={{ identifier: props.identifier }}
        />
    </div>
}

export default Comments;