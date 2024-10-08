// importando o css
import style from "./style.module.css";

export default function Profile(props)
{
    return (
            <div className={style.container}>
                <img className={style.avatar} src={props.avatar} alt={props.name} />
                <h2 className={style.name}>{props.name}</h2>
                <div>{props.bio}</div>
                <div>{props.phone}</div>
                <div>{props.email}</div>
                <div className={style.links}>
                  <a href={props.githubUrl} target="_blank">GitHub</a>
                  <a href={props.linkedinUrl} target="_blank">LinkedIn</a>
                  <a href={props.twitterUrl} target="_blank">Twitter</a>
                </div>
            </div>
            )
}