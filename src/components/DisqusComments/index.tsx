import { DiscussionEmbed } from "disqus-react";

interface Props {
  post: {
    id?: string;
    title: string;
  };
}
const DisqusComments = ({ post }: Props) => {
  const disqusShortname = "newbooks-1";
  const disqusConfig = {
    url: `https://new-books-web.vercel.app/book/${post.id}`,
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
