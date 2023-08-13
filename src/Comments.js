import user from "./utils/user.png";

const commentData = [
  {
    name: "Mohit",
    text: "Its good",
    replies: [
      {
        name: "Archit",
        text: "Great",
        replies: [
          {
            name: "Rahul",
            text: "Awesome",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Archit",
    text: "awesome video",
    replies: [],
  },
  {
    name: "Manas",
    text: "incredible",
    replies: [
      {
        name: "Archit",
        text: "Great",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex m-1 p-2 mt-3 rounded-2xl bg-gray-700">
      <img src={user} className="w-10 h-10 mr-3" />
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="">{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) =>(
      <div key={index}>
        <Comment  data={comment} />
        <div className="pl-3 border-l border-gray-500 ml-5">
          <CommentList comments={comment.replies} />
        </div>
      </div>
    )
  );
};

const Comments = () => {
  return (
    <div>
      <div className="text-lg font-bold">Comments</div>
      <CommentList comments={commentData} />
    </div>
  );
};

export default Comments;
