import { AvatarGroup, Avatar } from "rsuite";
import ava1 from "../../images/Ellipse 14.png";
import ava2 from "../../images/Ellipse 15.png";
import ava3 from "../../images/Ellipse 16.png";
import ava4 from "../../images/Ellipse 17.png";
import ava5 from "../../images/Ellipse 18.png";

const users = [
  { avatar: ava1, name: "Ellipse1" },
  { avatar: ava2, name: "Ellipse2" },
  { avatar: ava3, name: "Ellipse3" },
  { avatar: ava4, name: "Ellipse4" },
  { avatar: ava5, name: "Ellipse5" },
];

const AvatarComp = () => (
  <>
    <AvatarGroup stack>
      {users.map((user) => (
        <Avatar
          circle
          key={user.name}
          className="img-fluid avatarImgs"
          src={user.avatar}
          alt={user.name}
        />
      ))}
    </AvatarGroup>
  </>
);

export default AvatarComp;
