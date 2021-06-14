import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    avatarImg={faker.image.avatar()}
                    author={faker.name.firstName()}
                    timeAgo="Yesterday at 5:45pm"
                    content="Awesome!"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    avatarImg={faker.image.avatar()}
                    author="Alex"
                    timeAgo="Today at 6:21pm"
                    content="That's great! Thanks for sharing."
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    avatarImg={faker.image.avatar()}
                    author="Jane"
                    timeAgo="Today at 8:59pm"
                    content="What a story. Amazing!"
                />
            </ApprovalCard>
           
           <ApprovalCard>
            <CommentDetail
                    avatarImg={faker.image.avatar()}
                    author={faker.name.firstName()}
                    timeAgo="Today at 9:52pm"
                    content="I can't believe this is real."
                />
           </ApprovalCard>
            
        </div>
    );
};

ReactDOM.render(<App /> , document.querySelector('#root'));
