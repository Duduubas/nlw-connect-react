'use client'

import { IconButton } from "@/components/icon-button";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { Link, Copy } from "lucide-react";
import { toast } from "react-hot-toast"; // Biblioteca para alertas mais bonitos (opcional)

interface InviteLinkInputProps {
	inviteLink: string;
  }
  
  export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
	function CopyInviteLink() {
	  navigator.clipboard.writeText(inviteLink)
		.then(() => {
		  //toast.success("Link copiado!"); // Se estiver usando react-hot-toast
		  alert("Link copiado!"); // Caso prefira alert nativo
		})
		.catch(() => toast.error("Erro ao copiar o link!"));
	}

    return(
			<InputRoot>
				<InputIcon>
				<Link className='size-5'/>
				</InputIcon>

				<InputField readOnly defaultValue={inviteLink}/>


				<IconButton className='-mr-2' onClick={CopyInviteLink}>
					<Copy className='size-5'/>
			    </IconButton>

			</InputRoot>
    )
}