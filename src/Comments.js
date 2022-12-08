import Comment from './Comment';

function Comments(){
    const commentsData = [
        { creater:"Alex", comment: "Good video", likedCount: "10"},
        { creater:"Bob", comment: "Bad video", likedCount: "5"},
        { creater:"Celin", comment: "Like it!", likedCount: "4"}
      ];

    return (
        <div className='comments'>
            {commentsData.map((comment) => {
              return (
                <Comment comment={comment} />
              )
            })
            }
        </div>
    )
}

export default Comments;