import Card from "@site/src/components/Card";
import CardHeader from "@site/src/components/CardHeader";
import CardBody from "@site/src/components/CardBody";
import CardFooter from "@site/src/components/CardFooter";
import Link from "@docusaurus/Link";

const PostCard = ({ title, description, link, cta }) => {
    return (
        <Card shadow='md'>
            <CardHeader>
                <h3>{title}</h3>
            </CardHeader>
            <CardBody>{description}</CardBody>
            <Link to={link}>
                <CardFooter>
                    <button className='button button--secondary button--block'>
                        {cta}
                    </button>
                </CardFooter>
            </Link>
        </Card>
    );
};

export default PostCard;
