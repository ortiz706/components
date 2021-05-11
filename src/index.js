import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentsDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    time="Today at 16:00" 
                    content="Nice blog post!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="James" 
                    time="Today at 11:00" 
                    content="Nice work!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Arthur" 
                    time="Yesterday at 17:00" 
                    content="Nice one!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    ); 

};

ReactDom.render(<App />, document.querySelector('#root')); 