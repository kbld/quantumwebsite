
# J’importe des modules

import tkinter as tk
from qat.lang.AQASM import Program, H, CNOT
from tkinter import *

# Je définis les paramètre d’affichage de ma fenêtre

root = tk.Tk()
root.title('Quantum Program - Killian B')
root.geometry("700x400")
root.resizable(False, False)

# J'affiche une image en fond d'écran dans mon programme

bg = PhotoImage(file="back-atos.png")
my_label = Label(root, image=bg)
my_label.place(x=0, y=0, relwidth=1, relheigh=1)


# Je créer une fonction qui sera exécuter à l’aide de mon bouton
def showQuantum():

    # Je créer un programme
    qprog = Program()

    # Je défini le nombre de qubits
    nbqbits = 2

    #  J’attribue les qubits à mon programme
    qbits = qprog.qalloc(nbqbits)

    # je créer une porte d’entrée et une de sortie pour mon programme qui rentre et sort de l’ordinateur quantique
    qprog.apply(H, qbits[0])
    qprog.apply(CNOT, qbits[0], qbits[1])

    # j’exporte mon programme vers l’ordinateur quantique d’Atos
    circuit = qprog.to_circ()

    # J'importe le processeur quantique pour faire fonctionner mon programme

    from qat.qpus import PyLinalg

    # Créer une unité de processeur quantique

    linalgqpu = PyLinalg()

    # Création d’un algorithme
    job = circuit.to_job()

    # Je soumet mon algorithme au QPU (Puce quantique)
    result = linalgqpu.submit(job)

    # J’affiche le résultat de ma requête
    for sample in result:
            monTexte = StringVar()
            monTexte.set("État %s Amplitude %s" % (sample.state, sample.amplitude))
            texteLabel = Label(root,pady="4", font="Avenir", width="1200",bg="white", textvariable=monTexte)
            texteLabel.pack(padx="30")

# J'affiche une image dans mon programme

canvas = Canvas(root, width = 270, height = 100,bg="white", bd=0, highlightthickness=0, relief='ridge')
canvas.pack()
img = PhotoImage(file="atoslogo.png")
canvas.create_image(30,30, anchor=NW,image=img)

#Je créer un bouton qui permettra d’afficher mon résultat et je définis son design via Tkinter

button = tk.Button(root,text='Afficher', bg='#2980B9',fg='white', height = 1, width = 17, bd ="0", activebackground='#404040', activeforeground = 'white', cursor='hand2', font="Poppins", command=showQuantum)
button.pack(padx=50, pady=50)

#Je créer un bouton qui permettra d’afficher mon résultat et je définis son design via Tkinter

button2 = tk.Button(root, bg='#F0073D',fg='white',  height = 1, width = 17, bd ="0", activebackground='#900C3F', activeforeground = 'white', cursor='hand2', font="Poppins", text="Quitter le programme", command=root.destroy)  #Je définis que ce bouton doit quiter de mon programme
button2.pack(padx=10) #Je définis le design de mon programme via Tkinter

# Je met fin au programme

root.mainloop()