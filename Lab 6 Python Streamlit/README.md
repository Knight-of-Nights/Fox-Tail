# Lab 6 Python Streamlit

import streamlit as st

st.write("Base tuition: $42540")
st.write("Fees: $2025")

Tuition = 44565

GPA = st.number_input("Highschool GPA:")
SAI = st.number_input("FAFSA SAI: ")
local = st.text_input("Are you local to the area?:")

if GPA >= 3.5:
    st.balloons()
    st.toast("Congrats. You recive a merit scholarship of 20K!")
    Tuition -= 20000

if SAI <= 7395:
    st.toast("Congrats. You recive a Pell grant of $7395-SAI!")
    st.balloons()
    Tuition -= 7395-SAI

if local == "yes":
    st.toast("Congrats. You recive a 5K scholarship")
    st.balloons()
    Tuition -= 5000

st.success("Total tuition: $" + str(Tuition))