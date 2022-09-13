export default function SideElement(props) {
  return (
            <li>
				<a href={props.path}>
					<span className="icon image_wrap">
					<img src={props.img} alt={props.title}/>
					 <p class="img_description">{props.title}</p>
					</span>
					<span className="text">{props.title}</span>
				</a>
			</li>
  );
};

