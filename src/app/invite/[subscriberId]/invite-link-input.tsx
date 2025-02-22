'use client'

import { IconButton } from "@/components/icon-button";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { Link, Copy } from "lucide-react";

interface InviteLinkInputProps {
	inviteLink: string
}

export function InviteLinkInput({inviteLink}: InviteLinkInputProps) {
	function CopyInviteLink(){
		navigator.clipboard.writeText(inviteLink);

	}

    return(
			<InputRoot>
				<InputIcon>
				<Link className='size-5'/>
				</InputIcon>

				<InputField readOnly defaultValue={inviteLink}/>


				<IconButton className='-mr-2' onClick={(CopyInviteLink) => alert('Sucesso! O link foi copiado.')}>
					<Copy className='size-5'/>
			    </IconButton>

			</InputRoot>
    )
}