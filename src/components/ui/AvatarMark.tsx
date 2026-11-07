import ProfileFace from "./ProfileFace";
import {
   AVATAR_SIZE,
   CARD_FILL,
   DISC_DIAMETER,
   HAIRLINE,
} from "./devAvatarData";

/** Portrait disc: the illustrated face (ProfileFace) follows the pointer inside a fixed disc. */
const AvatarMark = () => (
   <div
      style={{
         position: "absolute",
         inset: (AVATAR_SIZE - DISC_DIAMETER) / 2,
         borderRadius: "50%",
         background: CARD_FILL,
         border: `1px solid ${HAIRLINE}`,
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         overflow: "hidden",
      }}
   >
      <ProfileFace size={DISC_DIAMETER - 2} />
   </div>
);

export default AvatarMark;
