import { DiscussionEmbed } from "disqus-react";

interface Props {
  post: {
    id: string;
    title: string;
  };
}
const DisqusComments = ({ post }: Props) => {
  const disqusShortname = "newbooks";
  const disqusConfig = {
    url: "http://localhost:5173",
    identifier: post.id,
    title: post.title,
  };
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
