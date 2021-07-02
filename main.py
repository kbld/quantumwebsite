# J’importe des modules

import tkinter as tk
from qat.lang.AQASM import Program, H, CNOT
from tkinter import *

# Je définis les paramètre d’affichage de ma fenêtre

root = tk.Tk()
root.resizable(height = 1000, width = 300)

# Je créer une fonction qui sera exécuter à l’aide de mon bouton

def showQuantum():

# Je créer un programme

qprog = Program()
# Je défini le nombre de qubits

nbqbits = 2

# J’attribue les qubits à mon programme

qbits = qprog.qalloc(nbqbits)

# je créer une porte d’entrée et une de sortie pour mon programme qui rentre   et sort de l’ordinateur quantique

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


9/2. Création d’un programme // Présentation du code

# J’affiche le résultat de ma requête

for sample in result:
monTexte = StringVar()
monTexte.set("État %s Amplitude %s" % (sample.state,sample.amplitude))
texteLabel = Label(root, font="Avenir", textvariable=monTexte)
texteLabel.pack()

# Je créer un bouton qui permettra d’afficher mon résultat et je définis son design via Tkinter

button = tk.Button(root,text='Afficher', bg='#2980B9',fg='white', height = 2, width = 20, bd ="0", activebackground='#404040', activeforeground = 'white', cursor='hand2', font="Avenir", command=showQuantum)
button.pack(side='left',ipadx=20, padx=30)

# Je créer un bouton qui permettra de mettre fin au programme et je définis son design via Tkinter

bouton2 = tk.Button(root, bg='#C70039',fg='white',  height = 2, width = 20, bd ="0", activebackground='#900C3F', activeforeground = 'white', cursor='hand2', font="Avenir", text="Quitter le programme", command=root.destroy)
bouton2.pack(side='right' ,ipadx=20, padx=30)

# Je met fin au programme

root.mainloop()
