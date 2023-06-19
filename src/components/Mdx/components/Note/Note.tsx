import { NoteIcon, TipIcon, WarningIcon } from '@/components/Icons';

type NoteTypes = 'warning' | 'tip' | 'note';

const Icons = {
  note: <NoteIcon size={26} />,
  warning: <WarningIcon size={26} />,
  tip: <TipIcon size={26} />
};

const Title = {
  note: 'Nota',
  warning: 'Atenção',
  tip: 'Dica'
};

const Color = {
  note: 'blue',
  warning: 'red',
  tip: 'green'
};

type NoteProps = {
  children: React.ReactNode;
  type?: NoteTypes;
};

export const Note = ({ children, type = 'note' }: NoteProps) => {
  const icon = Icons[type];
  const color = Color[type];
  const title = Title[type];

  return (
    <div className={`mt-6 rounded-lg bg-${color}-400/30 px-6 py-4`}>
      <div className={`flex items-center gap-2 text-${color}-400 mb-2`}>
        {icon}
        <p className="text-xl font-semibold">{title}</p>
      </div>

      {children}
    </div>
  );
};
